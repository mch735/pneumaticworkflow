# Generated by Django 2.2.28 on 2022-07-09 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0158_migrate_to_template_owners'),
    ]

    operations = [
        migrations.AddField(
            model_name='template',
            name='embed_id',
            field=models.CharField(blank=True, max_length=32, null=True),
        ),
        migrations.AddField(
            model_name='template',
            name='is_embedded',
            field=models.BooleanField(default=False),
        ),
    ]
