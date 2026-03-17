from playwright.sync_api import sync_playwright
import os

pages_to_capture = [
    ('/', '/tmp/capol_home.png'),
    ('/produtos', '/tmp/capol_produtos.png'),
    ('/quem-somos', '/tmp/capol_quem_somos.png'),
    ('/contato', '/tmp/capol_contato.png'),
    ('/blog', '/tmp/capol_blog.png'),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 900})

    for path, output in pages_to_capture:
        url = f'http://localhost:3000{path}'
        print(f'Capturing {url}...')
        page.goto(url)
        page.wait_for_load_state('networkidle')
        page.screenshot(path=output, full_page=True)
        print(f'  Saved to {output}')

    browser.close()
    print('Done!')
