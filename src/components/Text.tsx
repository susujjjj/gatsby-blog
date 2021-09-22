import React, { FunctionComponent } from 'react';

interface TextProps {
  text: string;
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}</div>;
};

export default Text;
//FunctionComponent 타입에 TextProps generic을 추가
//리액트에서는 함수형 컴포넌트 타입에 generic을 추가함으로써 컴포넌트가 받는 props가 어떤것이 있고,
//타입은 무엇인지 지정해줄수 있다
//따라서 해당 컴포넌트에 props를 넘길때에 정해진 타입에 맞는 데이터를 넘길수 있도록 할 수 있습니다
//현재 index.tsx 파일의 indexPage 컴포넌트에서는 string 타입의 데이터를 props 로 넘기고있습니다
// 이를 숫자 타입으로 바꾸면 어떻게될까 ?
// error TS2322: Type 'number' is not assignable to type 'string'. 라고 뜰것이다
//이처럼 types와 generic을 통해 props의 type checking이 가능하다 리액트에서 타스를 사용하는 가장 큰 이유중하나다
//위와같은 예시에서도 장점이 잘 드러나는 type checking은 컴포넌트규모가 커질수록 효과는 더 크다
