num = 1
while num <= 10:
    print(f"Multiplication table for {num}")
    for i in range(1, 11):
        print(f" {num} * {i} = {num * i}")
    num += 1