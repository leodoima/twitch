import React from 'react';

import { 
  List, 
  StreamContainer, 
  StreamRow, 
  StreamThumbnail, 
  StreamColumn, 
  StreamHeader, 
  StreamAvatar, 
  StreamUserName, 
  StreamDescription, 
  StreamCategory, 
  TagRow, 
  TagView, 
  TagText } from './styles';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

const StreamList: React.FC = () => {

  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>leodoima_oficial</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end e Back-end
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Tech
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web DEv</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>  
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
