import datetime

def display_facts():
    facts = [
        "India gained independence from British rule on August 15, 1947.",
        "The Indian Independence Movement was led by leaders like Mahatma Gandhi, Jawaharlal Nehru, and Sardar Vallabhbhai Patel.",
        "On August 15, 1947, Jawaharlal Nehru, the first Prime Minister of India, raised the Indian national flag at the Red Fort in Delhi.",
        "The Independence Day is celebrated with flag hoisting ceremonies, parades, and cultural events across India.",
        "The Indian national flag was designed by Pingali Venkayya and adopted on July 22, 1947."
    ]
    print("Here are some historical facts about India's Independence Day:")
    for fact in facts:
        print(f"- {fact}")


def countdown_to_independence_day():
    today = datetime.date.today()
    current_year = today.year
    independence_day = datetime.date(current_year, 8, 15)

    if today > independence_day:
        
        independence_day = datetime.date(current_year + 1, 8, 15)

    days_left = (independence_day - today).days
    print(f"\nCountdown to the next Independence Day: {days_left} days")


def main():
    display_facts()
    countdown_to_independence_day()


if __name__ == "__main__":
    main()
