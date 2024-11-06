# Generated by Django 2.2.26 on 2022-11-23 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0091_auto_20220602_0552'),
        ('notifications', '0003_create_overdue_events'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_notified_about_notifications',
        ),
        migrations.AddField(
            model_name='notification',
            name='is_notified_about_not_read',
            field=models.BooleanField(default=False, help_text='True if the email "You have an unread notification" has been sent.'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='type',
            field=models.CharField(choices=[('system', 'system'), ('onboarding', 'onboarding not finished'), ('comment', 'new comment'), ('mention', 'mention'), ('urgent', 'urgent'), ('not_urgent', 'not urgent'), ('overdue_task', 'overdue task')], max_length=24),
        ),
        migrations.RunSQL("""
            UPDATE accounts_notification
              SET is_notified_about_not_read=TRUE
            WHERE is_deleted IS FALSE
        """)
    ]
