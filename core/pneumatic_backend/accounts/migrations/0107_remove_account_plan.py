# Generated by Django 2.2 on 2023-08-01 09:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0106_auto_20230720_0820'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='plan',
        ),
    ]
