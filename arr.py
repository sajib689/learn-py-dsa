my_array = [7, 12, 9, 4, 11]
minVal = my_array[0]    

for i in my_array:
    if i < minVal:
        minVal = i
print("Minimum value in the array is:", minVal)

my_array2 = [64, 34, 25, 12, 22, 11, 90, 5]

n = len (my_array2)
for i in range (n):
    for j in range (0, n-i-1):
        if my_array2[j] > my_array2[j+1]:
            my_array2[j], my_array2[j+1] = my_array2[j+1], my_array2[j]
print("Sorted array is:", my_array2)



n = len(my_array)
for i in range(n-1):
    swapped = False
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
            swapped = True
    if not swapped:
        break

print("Sorted array:", my_array)