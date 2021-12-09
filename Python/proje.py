# Task 1
# Write a function that flattens a list. Its elements can consist of multi-layered lists (such as [[3],2]) or non-scalar data.
def flatten(l):
    result = []
    for i in l:
        if isinstance(i, list):
            result.extend(flatten(i))
        else:
            result.append(i)
    return result

# Task 2
# Write a function that reverses the elements inside the given list. If the elements inside the list also contain the list, reverse their elements as well.
def reverse_recursion(l):
    return [elem[::-1] for elem in l]
