import { Favorite, FavoriteBorder, MoreVertOutlined, Share} from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <>
     <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
      sx={{height: "370px"}}
        
        image="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite
        sx={{color:"red"}} />} />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
    </Card></>
  )
}

export default Post