import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen dimensions
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Bouncing Ball Game")

# Colors
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)

# Ball properties
ball_radius = 20
ball_pos = [screen_width // 2, screen_height // 2]
ball_speed = [5, 5]

# Game loop
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Move the ball
    ball_pos[0] += ball_speed[0]
    ball_pos[1] += ball_speed[1]

    # Bounce the ball off the walls
    if ball_pos[0] <= ball_radius or ball_pos[0] >= screen_width - ball_radius:
        ball_speed[0] = -ball_speed[0]
    if ball_pos[1] <= ball_radius or ball_pos[1] >= screen_height - ball_radius:
        ball_speed[1] = -ball_speed[1]

    # Fill the screen with black
    screen.fill(black)

    # Draw the ball
    pygame.draw.circle(screen, red, ball_pos, ball_radius)

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)

pygame.quit()
sys.exit()
