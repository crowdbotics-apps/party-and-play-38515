from django.contrib import admin
from .models import Event,Service,Vendor
admin.site.register(Event)
admin.site.register(Vendor)
admin.site.register(Service)

# Register your models here.
