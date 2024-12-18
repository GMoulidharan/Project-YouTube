# Debouncing
    --> When typing slow diff between key stroke is =200ms
    --> When typing fast diff between key stroke is = 30ms

    Performance:
        -iphone pro max = 14 letteres + 1000 peoples = 14000 API calls made
        - with debouncing = 3 API calls *1000 = 3000

    
    - If diff between key stroke is <200ms -DECLINE API call
    - if diff between key stroke is >200ms make an API call