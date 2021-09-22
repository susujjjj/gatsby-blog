import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

// // Kebab Case 적용
// const Text1 = styled.div`
//   font-size: 20px;
//   font-weight: 700;
// `;

// // Camel Case 적용
// const Text2 = styled('div')(() => ({
//   fontSize: '15px',
//   color: 'blue',
// }));

const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`;

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}));

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

// import React, { FunctionComponent } from 'react';
// import { graphql } from 'gatsby';
// import Text from 'components/Text';
// import { Link } from 'gatsby';

// interface InfoPageProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string;
//         description: string;
//         author: string;
//       };
//     };
//   };
// }

// const InfoPage: FunctionComponent<InfoPageProps> = function ({
//   data: {
//     site: {
//       siteMetadata: { title, description, author },
//     },
//   },
// }) {
//   return (
//     <div>
//       <Text text={title} />
//       <Text text={description} />
//       <Text text={author} />
//       <Link to="/">To Main</Link>
//       {/* <a href="/">To Main</a> */}
//     </div>
//   );
// };

// export default InfoPage;

// //아래와 같이 변수에 query를 담아주고, 이를 export 해주면 gatsby 내부적으로 요청을 보냅니다
// //그럼 보낸 요청에 대한 응답으로 데이터를 props로 전달해줍니다
// //여기서 어떤  형식으로 데이터가 넘어올까 ?
// //위에서 graphiQL을 사용해보며 작성했던 query에 대한 반환값을 확인해봅시다.

// export const metadataQuery = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `;
