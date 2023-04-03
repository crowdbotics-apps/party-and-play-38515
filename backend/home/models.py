from django.conf import settings
from django.db import models
class Event(models.Model):
    'Generated Model'
    event_id = models.IntegerField()
class Vendor(models.Model):
    'Generated Model'
    vendor_id = models.IntegerField()
class Service(models.Model):
    'Generated Model'
    service_id = models.IntegerField()
class Payment(models.Model):
    'Generated Model'
    payment_id = models.IntegerField()
class Notification(models.Model):
    'Generated Model'
    notification_id = models.IntegerField()
class Customer(models.Model):
    'Generated Model'
    customer_id = models.IntegerField()
class Settings(models.Model):
    'Generated Model'
    settings_id = models.IntegerField()
class Account_Settings(models.Model):
    'Generated Model'
    isactive = models.BooleanField()
class Budget(models.Model):
    'Generated Model'
    amount = models.FloatField()
    year = models.IntegerField()
class Service_Type(models.Model):
    'Generated Model'
    name = models.TextField()
class Reviews(models.Model):
    'Generated Model'
    email = models.EmailField(max_length=254,)
    title = models.TextField()
    detail = models.TextField()
class Bank_Account(models.Model):
    'Generated Model'
    banke_name = models.TextField()
    ac_name = models.TextField()
    ac_no = models.IntegerField()
    routing_no = models.IntegerField()
    iban = models.TextField()
    swift_code = models.TextField()
class User_Role(models.Model):
    'Generated Model'
    role_name = models.TextField()
