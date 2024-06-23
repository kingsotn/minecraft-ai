from voyager import Voyager

mc_port = 56585

voyager = Voyager(
    mc_port=mc_port,
    openai_api_key=openai_api_key,
    env_wait_ticks=25,
    skill_library_dir="./skill_library/trial1",
    resume=False,
)

# Start lifelong learning
voyager.learn(voyager.learn(reset_env=False))
