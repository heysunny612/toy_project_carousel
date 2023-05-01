# 토이프로젝트 캐러셀 & 3D 캐러셀 





>이미 캐러셀은 정말 완벽하게 구현된 많은 라이브러리가 있기때문에, 위에 처럼 간단하게 PREV, NEXT 버튼으로만 구성된 캐러셀이 실제 프로젝트에 쓰여지진 않겠지만, 캐러셀이 어떻게 동작하는지 알 수 있게 되었다..!

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
 moveCarouselTo() {
    if (this.isMoving) return;
    this.disabledMoving();
    let prev = this.current - 1;
    let next = this.current + 1;
    if (this.current === 0) {
      prev = this.totalItems - 1;
    } else if (this.current === this.totalItems - 1) {
      next = 0;
    }
    for (let i = 0; i < this.totalItems; i++) {
      this.items[i]?.classList.remove('active');
      this.items[i]?.classList.remove('prev');
      this.items[i]?.classList.remove('next');

      this.items[this.current].classList.add('active');
      this.items[prev].classList.add('prev');
      this.items[next].classList.add('next');
    }
  }
```
<br/>

## 옵셔널체이닝 (Optional Chaining) ES11_2020

> optional chaning연산자 (?.)는 객체 내의 key에 접근할 때 그 참조가 유효한지 아닌지 직접 명시하지 않고도 접근할 수 있는 연산자이다. ?. 앞의 평가대상이 만약 nullish ( undefined 또는 null ) 일 경우 평가를 멈추고 undefined를 반환한다. 우리는 코드를 짜면서 객체내의 값을 접근하는 경우가 있다. 하지만 항상 그 key값이 존재하는 경우 보다는 없는 경우도 있다. 위 코드에서처럼, 아이템의 key 값 중 하나인 classList에 특정 클래스가 존재한다면, remove한다라는 코드를 통해, 따로 초기화 함수를 만들어주지 않아도 간단하게 작성할 수 있었다.


