# Generated by Django 2.2.16 on 2020-11-26 13:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0057_auto_20201123_1328'),
    ]

    operations = [
        migrations.RenameField(
            model_name='apikey',
            old_name='robot',
            new_name='user',
        ),
    ]
