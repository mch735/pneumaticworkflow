# Generated by Django 2.2.13 on 2020-06-23 16:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0038_auto_20200623_1650'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='applications',
        ),
    ]
