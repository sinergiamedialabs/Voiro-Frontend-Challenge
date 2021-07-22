export function truncateChar(text: string, length: any, font: any) {
    let charlimit = (length/6) - 10;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    context!.font = font || getComputedStyle(document.body).font;
  
    let textLength = context!.measureText(text).width;

    let trimLenth = ((length * text.split("").length)/textLength) - 10

    if (!text || ((text.split("").length)) <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let testend = text.slice(text.length - 3);
    let shortened = without_html.substring(0, trimLenth) + "..." + testend;
    return shortened;
}