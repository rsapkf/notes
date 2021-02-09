---
id: oll-pll-visualizations-visualcube
title: Making OLL and PLL visualizations using VisualCube and Python.
tags: [cfop, cubing, python]
---

[VisualCube](http://cube.rider.biz/visualcube.php) ([Source](https://github.com/Cride5/visualcube)) is a PHP script that allows you to make visualizations for the Rubik's Cube for demonstration purposes. Well-known speedcubing guides use this tool. I wanted to download all and PLL cases in SVG and PNG formats for my [PLL recognition guide](https://rsapkf.xyz/hobbies/pll-recognition-guide). Here's how I did it using few short Python and JavaScript scripts.

<!--truncate-->

VisualCube allows you to create several types of visuals- changing transparency, masking pieces that are not related to a specific step in CFOP, tweaking the angle of the cube, etc. All these variables can be specified using URL parameters. For PLL, the URL I wanted was:

`http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&case=<algorithm>`

The parameters work like this:

- `fmt`: Specify the type of image extension.
- `pzl`: Specify the puzzle type (e.g. 3 for 3x3, 4 for 4x4, etc).
- `view`: Specify special view for the image. `plan` rotates the cube to expose the U face which is what we want for PLL.
- `case`: Specify the alg which _**solves**_ a specific case.

The first 3 parts of the URL are static. What I want is a list of all PLL algorithms and use them one by one to form a URL and then download the page to my local disk.

For the algorithms, I visited [AlgDb.net's PLL page](http://algdb.net/puzzle/333/pll), opened the developer console (CTRL+Shift+I), and ran this JavaScript code in Firefox's multi-line editor mode in the Console:

```js
let algs = '';

document.querySelectorAll('.case-img').forEach((img) => {
  let params = new URLSearchParams(img.src);
  // get the value of case parameter from URL and remove all spaces
  // I found that AlgDb uses http://cubiclealgdbimagegen.azurewebsites.net/generator?&puzzle=3&case=<algorithm>&view=plan&stage=pll for images which has a similar API as VisualCube
  let alg = params.get('case').split(' ').join('');
  // extract the PLL case name from parent's href attribute
  let pll = img.parentNode.getAttribute('href').replace('/puzzle/333/pll/', '');
  // capitalize the first letter of each PLL
  capitalizedPLL = pll.charAt(0).toUpperCase() + pll.slice(1);
  algs += `"${capitalizedPLL}" : "${alg}",\n`;
});

console.log(`plls = {\n${algs}}`);
```

This outputs a nicely formatted Python dictionary with all PLL names as keys and associated algorithms as values in the console which can be copied and pasted to a Python script.

Similarly, for OLLs, I visited [AlgDb's OLL page](http://algdb.net/puzzle/333/oll) and ran this code in the console:

```js
let algs = '';
// Since OLLs cases are just numbers, we can use this variable and increment it
let ollCase = 1;

document.querySelectorAll('.case-img').forEach((img) => {
  let params = new URLSearchParams(img.src);
  let alg = params.get('case').split(' ').join('');
  algs += `"${ollCase}" : "${alg}",\n`;
  ollCase++;
});

console.log(`olls = {\n${algs}}`);
```

The following Python script iterates through these dicts to get the images and saves them locally as **<oll_number>.svg** and **<pll_name>.svg** respectively in separate directories. Notice the `oll_url` has an additional parameter called `stage` equal to `oll` so that irrelevant stickers are masked from being coloured and makes the result clearer. Just replace the occurences of `svg` in the file to `png` and run the script again to get all images as PNG files.

Make sure to run this from an empty directory.

```python title="script.py"
import os
import urllib.request


oll_url = 'http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&stage=oll&case='
pll_url = 'http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&case='


plls = {
    "Aa": "R'FR'B2RF'R'B2R2",
    "Ab": "l'R'D2RUR'D2RU'Rx'",
    "E": "LR'U'RUL'U'R'URrUR'U'r'FRF'",
    "F": "R'URU'R2F'U'FURFR'F'R2",
    "Ga": "R2uR'UR'U'Ru'R2y'R'UR",
    "Gb": "R'U'RyR2uR'URU'Ru'R2",
    "Gc": "R2u'RU'RUR'uR2yRU'R'",
    "Gd": "RUR'y'R2u'RU'R'UR'uR2",
    "H": "M2UM2U2M2UM2",
    "Ja": "L'U2LUL'U2RU'LUR'",
    "Jb": "RUR'F'RUR'U'R'FR2U'R'U'",
    "Na": "LU'RU2L'UR'LU'RU2L'UR'",
    "Nb": "R'UL'U2RU'LR'UL'U2RU'L",
    "Ra": "LU2L'U2LF'L'U'LULFL2",
    "Rb": "R'U2RU2R'FRUR'U'R'F'R2",
    "T": "RUR'U'R'FR2U'R'U'RUR'F'",
    "Ua": "R2U'R'U'RURURU'R",
    "Ub": "R'UR'U'R'U'R'URUR2",
    "V": "R'UR'd'R'F'R2U'R'UR'FRF",
    "Y": "FRU'R'U'RUR'F'RUR'U'R'FRF'",
    "Z": "M2UM2UM'U2M2U2M'",
}


olls = {
    "1": "RU2R2'FRF'U2R'FRF'",
    "2": "FRUR'U'F'fRUR'U'f'",
    "3": "r'R2UR'UrU2r'UM'",
    "4": "MU'rU2r'U'RU'R2r",
    "5": "r'U2RUR'Ur",
    "6": "rU2R'U'RU'r'",
    "7": "rUR'URU2r'",
    "8": "l'U'LU'L'U2l",
    "9": "RU2R'M'U'RU'R'UM",
    "10": "RUR'yR'FRU'R'F'R",
    "11": "r'R2UR'URU2R'UM'",
    "12": "FRUR'U'F'UFRUR'U'F'",
    "13": "FURU'R2F'RURU'R'",
    "14": "R'FRUR'F'Ry'RU'R'",
    "15": "r'U'rR'U'RUr'Ur",
    "16": "rUr'RUR'U'rU'r'",
    "17": "RUR'UR'FRF'U2R'FRF'",
    "18": "l'U'r'U2LU2L'U2rUl",
    "19": "r'RURUR'U'rR2'FRF'",
    "20": "MURUR'U'M2URU'r'",
    "21": "RUR'URU'R'URU2R'",
    "22": "RU2R2U'R2U'R2U2R",
    "23": "R2DR'U2RD'R'U2R'",
    "24": "rUR'U'r'FRF'",
    "25": "R'FRB'R'F'RB",
    "26": "R'U'RU'R'U2R",
    "27": "RUR'URU2R'",
    "28": "rUR'U'MURU'R'",
    "29": "MURUR'U'R'FRF'M'",
    "30": "r'U2RUR'UrRU2R'U'RU'R'",
    "31": "R'U'FURU'R'F'R",
    "32": "RUB'U'R'URBR'",
    "33": "RUR'U'R'FRF'",
    "34": "FRUR'U'R'F'rURU'r'",
    "35": "RU2R2'FRF'RU2R'",
    "36": "R'U'RU'R'URURyR'F'R",
    "37": "FR'F'RURU'R'",
    "38": "RUR'URU'R'U'R'FRF'",
    "39": "R'r'D'rU'r'DrUR",
    "40": "RrDr'UrD'r'U'R'",
    "41": "RU'R'U2RUyRU'R'U'F'",
    "42": "R'U'RU'R'U2RFRUR'U'F'",
    "43": "f'L'U'LUf",
    "44": "fRUR'U'f'",
    "45": "FRUR'U'F'",
    "46": "R'U'R'FRF'UR",
    "47": "F'L'U'LUL'U'LUF",
    "48": "FRUR'U'RUR'U'F'",
    "49": "RB'R2FR2BR2F'R",
    "50": "r'Ur2U'r2'U'r2Ur'",
    "51": "fRUR'U'RUR'U'f'",
    "52": "RUR'URd'RU'R'F'",
    "53": "r'U'RU'R'URU'R'U2r",
    "54": "rUR'URU'R'URU2r'",
    "55": "RU2R2U'RU'R'U2FRF'",
    "56": "rUr'URU'R'URU'R'rU'r'",
    "57": "RUR'U'rR'URU'r'",
}


os.makedirs('oll/svg', exist_ok=True)
os.makedirs('pll/svg', exist_ok=True)


def download_vis(stage, url, algs_dict):
    for case, alg in algs_dict.items():
        urllib.request.urlretrieve(
            f'{url}{alg}', f'{stage}/svg/{case}.svg')


download_vis('oll', oll_url, olls)
download_vis('pll', pll_url, plls)
```
