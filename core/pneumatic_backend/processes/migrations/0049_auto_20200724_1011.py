# Generated by Django 2.2.14 on 2020-07-24 10:11

from django.db import migrations


def set_comments_task(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0048_comment_task'),
    ]

    operations = [
        migrations.RunPython(
            set_comments_task,
            reverse_code=migrations.RunPython.noop
        )
    ]
