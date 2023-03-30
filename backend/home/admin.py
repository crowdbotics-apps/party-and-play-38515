from django.contrib import admin
from .models import Booking,Customer,Event,Notification,Payment,Service,Settings,Vendor
admin.site.register(Event)
admin.site.register(Vendor)
admin.site.register(Service)
admin.site.register(Payment)
admin.site.register(Booking)
admin.site.register(Notification)
admin.site.register(Customer)
admin.site.register(Settings)

# Register your models here.
