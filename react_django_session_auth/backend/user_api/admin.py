from django.contrib import admin
from .models import AppUser

class AppUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'username', 'is_staff', 'is_active', 'date_joined')

admin.site.register(AppUser, AppUserAdmin)
