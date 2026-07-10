import json
import base64
import sys
import os
import fitz

def extract(json_path, out_dir):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    os.makedirs(out_dir, exist_ok=True)
    pdf_path = os.path.join(out_dir, '_source.pdf')
    with open(pdf_path, 'wb') as out:
        out.write(base64.b64decode(data['content']))
    doc = fitz.open(pdf_path)
    results = []
    for page_index in range(len(doc)):
        page = doc[page_index]
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base_image = doc.extract_image(xref)
            ext = base_image['ext']
            img_bytes = base_image['image']
            if len(img_bytes) < 30000:
                continue
            fname = f"page{page_index+1}_img{img_index+1}.{ext}"
            with open(os.path.join(out_dir, fname), 'wb') as f:
                f.write(img_bytes)
            results.append((fname, len(img_bytes)))
    results.sort(key=lambda x: -x[1])
    print(f"title={data['title']} pages={len(doc)}")
    for fname, size in results[:8]:
        print(f"{size}\t{out_dir}/{fname}")

if __name__ == '__main__':
    extract(sys.argv[1], sys.argv[2])
