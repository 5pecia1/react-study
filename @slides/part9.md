---
marp: true
paginate: true
auto-scaling: true
---

# 컴포넌트 스타일링

---

## 일반 CSS

컴포넌트 이름-클리스 이름 형태

```css
.App-logo {
}
.App-header {
}
.App-link {
}
```

### CSS Selector

최상위 html요소에는 컴포넌트의 이름을 사용

```css
.App .logo {
}
.App header {
}
.App a {
}
```

---

## Sass(Syntacically Awesome Style Sheets)

* 복잡한 작업을 쉽게 할 수 있또록 해줌
* 스타일 코드의 재활용성을 높혀 줌
* 코드의 가독성을 높혀줌

---

### .sass vs .scss

.sass
```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body 
    font: 100% $font-stack
    color: $primary-color
```

.scss
```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}
```

.scss문법이 더 자주 사용 됨

---

#### 사용

```bash
$ yarn add node-sass
```

#### 특징
* 파일을 분리하여 import가능

```scss
@import './style/utils.scss';
```

---
### sass-loader 커스터마이징

* **create-react-app**은 세부 설정이 모두 감춰져 있음
