import json
import base64
import zipfile
import sys
import os

def extract(json_path, out_dir):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    os.makedirs(out_dir, exist_ok=True)
    pptx_path = os.path.join(out_dir, '_source.pptx')
    with open(pptx_path, 'wb') as out:
        out.write(base64.b64decode(data['content']))
    sizes = []
    with zipfile.ZipFile(pptx_path) as z:
        media = [n for n in z.namelist() if n.startswith('ppt/media/') and not n.endswith('.emf') and not n.endswith('.wmf')]
        for n in media:
            info = z.getinfo(n)
            sizes.append((n, info.file_size))
        sizes.sort(key=lambda x: -x[1])
        # extract top 6 largest (likely real photos, not tiny logos/icons)
        for n, size in sizes[:6]:
            z.extract(n, out_dir)
    print(f"title={data['title']}")
    for n, size in sizes[:6]:
        print(f"{size}\t{out_dir}/{n}")

if __name__ == '__main__':
    extract(sys.argv[1], sys.argv[2])
