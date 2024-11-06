# Generated by Django 2.2.16 on 2020-11-02 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0088_auto_20201102_1319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workflow',
            name='type',
            field=models.CharField(choices=[('custom', 'custom'), ('generic', 'generic'), ('generic_clone', 'generic clone'), ('invited_onboarding', 'onboarding invited'), ('invited_onboarding_admin', 'Invited admin users onboarding workflow'), ('invited_onboarding_regular', 'Invited regular users onboarding workflow')], default='custom', max_length=48),
        ),
    ]
