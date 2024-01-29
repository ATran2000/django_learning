from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['GET'])
@permission_classes([AllowAny])
def getRoutes(request):
    routes = [
        'api/user/',
        'api/user/register/',
        'api/user/login/',
        'api/user/logout/',
        'api/notes/',
    ]

    return Response(routes)