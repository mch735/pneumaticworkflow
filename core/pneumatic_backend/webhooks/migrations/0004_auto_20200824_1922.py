# Generated by Django 2.2.15 on 2020-08-24 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webhooks', '0003_webhook_is_deleted'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='webhook',
            unique_together=set(),
        ),
        migrations.AddConstraint(
            model_name='webhook',
            constraint=models.UniqueConstraint(condition=models.Q(is_deleted=False), fields=('account', 'target', 'event'), name='webhook_unique_constraint'),
        ),
    ]
