from voyager import Voyager
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Retrieve the OpenAI API key from environment variables
openai_api_key = os.getenv("OPENAI_API_KEY")

# Initialize Voyager with the specified parameters
voyager = Voyager(
    mc_port=63556,  # Use the specified port number
    openai_api_key=openai_api_key,
    env_wait_ticks=25,
    skill_library_dir="./skill_library/trial1",
    resume=False,
)

# Start lifelong learning
voyager.learn(voyager.learn(reset_env=False))
