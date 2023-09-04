# Generated by Django 4.2.4 on 2023-09-02 12:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='appuser',
            fields=[
                ('uid', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=512)),
            ],
        ),
        migrations.CreateModel(
            name='blog',
            fields=[
                ('bid', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('text', models.CharField(max_length=150)),
                ('btype', models.CharField(max_length=25)),
                ('state', models.BooleanField()),
                ('uid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.appuser')),
            ],
        ),
    ]