# Generated by Django 2.2.24 on 2021-06-21 13:31

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0078_alter_model_20210513_1405'),
        ('processes', '0136_auto_20210607_1227'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='kickoffvalue',
            name='kickoff_value_process_unique',
        ),
        migrations.RunSQL(
            sql="""
              DROP FUNCTION IF EXISTS tsvector_update_trigger_on_fileattachment
              CASCADE;
            """,
            reverse_sql="""
            CREATE OR REPLACE FUNCTION 
                tsvector_update_trigger_on_fileattachment()
              RETURNS trigger AS
            $BODY$
            BEGIN
              UPDATE processes_process
              SET name=name
              WHERE processes_process.id = new.process_id;
              RETURN new;
            end;
            $BODY$
              LANGUAGE plpgsql;
            """
        ),
        migrations.RunSQL(
            sql="""
              DROP FUNCTION IF EXISTS tsvector_update_trigger_on_process 
              CASCADE;
            """,
            reverse_sql="""
            CREATE OR REPLACE FUNCTION tsvector_update_trigger_on_process()
              RETURNS trigger AS
            $BODY$
            BEGIN
            SELECT to_tsvector(CONCAT(new.name) || ' ' || CONCAT(string_agg(pf.name, ' ')) || ' ' || CONCAT(string_agg(pt.value, ' ')) || ' ' || CONCAT(string_agg(pf2.value, ' ')))
            INTO new.search_content
            FROM processes_process pp
                   LEFT JOIN processes_kickoffvalue kv ON kv.process_id = pp.id AND pp.is_deleted is FALSE
                   LEFT JOIN processes_fileattachment pf ON pf.process_id = pp.id AND pf.is_deleted is FALSE
                   LEFT JOIN processes_taskfield pt on kv.id = pt.kickoff_id AND pt.is_deleted is FALSE
                   LEFT JOIN processes_fieldselection pf2
                     on pt.id = pf2.field_id AND pf2.is_selected is TRUE AND pf2.is_deleted is FALSE
            WHERE pp.id= new.id;
              RETURN new;
            END;
            $BODY$
              LANGUAGE plpgsql;
            """
        ),
        migrations.RunSQL(
            sql="""
              DROP FUNCTION IF EXISTS 
              tsvector_update_trigger_on_taskfield CASCADE;
            """,
            reverse_sql="""
            CREATE OR REPLACE FUNCTION tsvector_update_trigger_on_taskfield()
              RETURNS TRIGGER AS
            $BODY$
            BEGIN
              UPDATE processes_task SET name = name WHERE id = new.task_id;
              UPDATE processes_process p
              SET name = name
                     FROM processes_kickoffvalue k
              WHERE k.id = new.kickoff_id AND k.process_id=p.id;
              RETURN new;
            END;
            $BODY$
            LANGUAGE plpgsql;
            """,
        ),
    ]
