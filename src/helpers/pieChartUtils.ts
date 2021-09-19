class PieChartUtils {
  private colors = [
    '#de425b',
    '#488f31',
    '#3246a8',
    '#05ff9f',
    '#003f5c',
    '#2f4b7c',
    '#665191',
    '#a05195',
    '#d45087',
    '#f95d6a',
    '#ff7c43',
    '#ffa600',
  ] as string[];
  private randomColor() {
    const rint = Math.floor(0x100000000 * Math.random());

    return '#' + ('00000' + rint.toString(16)).slice(-6).toUpperCase();
  }
  getColors(num: number) {
    const res = [];
    for (let i = 0; i < num; i++) {
      if (i <= this.colors.length - 1) {
        res.push(this.colors[i]);
      } else {
        res.push(this.randomColor());
      }
    }
    return res;
  }
}

const pieUtils = new PieChartUtils();
export {pieUtils};
