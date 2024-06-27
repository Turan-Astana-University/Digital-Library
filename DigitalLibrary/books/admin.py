from django.contrib import admin
from .models import Book, BookElement
# Register your models here.




class BookElementInline(admin.TabularInline):
    model = BookElement
    extra = 3
    # fields = ['title']


class BookAdmin(admin.ModelAdmin):
    inlines = [BookElementInline]
    list_display = ['title']


    class Meta:
        model = BookElement


admin.site.register(Book, BookAdmin)