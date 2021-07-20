export function truncateChar(text: string, length: any) {
    let charlimit = (length/6) - 10;
    if (!text || ((text.split("").length) * 3) <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let testend = text.slice(text.length - 3);
    let shortened = without_html.substring(0, charlimit) + "..." + testend;
    return shortened;
}