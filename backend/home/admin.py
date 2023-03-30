from django.contrib import admin
from .models import Booking,Customer,Event,Notification,Payment,Service,Vendor
admin.site.register(Event)
admin.site.register(Vendor)
admin.site.register(Service)
admin.site.register(Payment)
admin.site.register(Booking)
admin.site.register(Notification)
admin.site.register(Customer)

# Register your models here.
