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
class Booking(models.Model):
    'Generated Model'
    booking_id = models.IntegerField()
class Notification(models.Model):
    'Generated Model'
    notification_id = models.IntegerField()
