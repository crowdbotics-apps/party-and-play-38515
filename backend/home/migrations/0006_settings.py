# Generated by Django 2.2.28 on 2023-03-30 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_customer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Settings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('settings_id', models.IntegerField()),
            ],
        ),
    ]
