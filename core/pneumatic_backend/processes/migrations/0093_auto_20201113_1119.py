# Generated by Django 2.2.16 on 2020-11-13 11:19

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0092_auto_20201109_0752'),
    ]

    operations = [
        migrations.AddField(
            model_name='workflow',
            name='generic_name',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='workflowtemplate',
            name='workflow_template',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, help_text='<span style="float: right; line-height: 18px; font-size: 15px; color: #4C4C4C">If you want to pass default args to kickoff fields, add default parameter to field template like this: `"default": "account_name"`. <br>If you want to make generic name, you should add parameter "generic_name" like this: `"generic_name": "{{user_first_name}}\'s onboarding".<br>Possible dynamic values: account_name, user_first_name, user_last_name, user_email</span>', null=True),
        ),
    ]
