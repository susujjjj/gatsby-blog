//소개글 구역에서 사용할 프로필 이미지
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Profile from '../../images/flower.png';

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  '<https://pyxis.nymag.com/v1/imgs/431/405/f532d2de344840c6a151bc3a073a56af51-flowers.2x.rsquare.w700.jpg>';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={Profile} alt="Profile Image" />;
};

export default ProfileImage;
