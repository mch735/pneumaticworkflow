# Generated by Django 2.2.13 on 2020-06-22 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0007_application_workflow_template'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='is_workflow_ready',
            field=models.BooleanField(default=False),
        ),
    ]
