# Generated by Django 2.2.17 on 2020-12-18 12:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0099_merge_20201201_0934'),
        ('accounts', '0063_notifications'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Notifications',
            new_name='Notification',
        ),
        migrations.RenameField(
            model_name='notification',
            old_name='is_readed',
            new_name='is_read',
        ),
    ]
