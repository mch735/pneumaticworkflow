# Generated by Django 2.2.16 on 2020-09-11 09:26

import django.contrib.postgres.search
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0050_delete_accountgenericworkflows'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='search_content',
            field=django.contrib.postgres.search.SearchVectorField(null=True),
        ),
    ]
