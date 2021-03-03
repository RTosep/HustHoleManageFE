import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from 'formik';
import Page from '../../Page';
import './user.css';

const UserPage = () => (
    <Page
      title="User"
    >
      <Formik
          initialValues={{ hole_id: '' }}
          onSubmit={ (values) => {
          }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className='holeQueryBox'>
            <Typography className='holeQueryText'>用户查询</Typography>
            <div className='searchHole'>
                <SearchIcon className='searchHoleIcon'/>
                <input
                type='text'
                name='hole_id'
                className="queryHole"
                placeholder="输入树洞ID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hole_id}
                />
            </div>
            <div className='searchComment'>
              <img className='commentQueryIcon' src='/comment.png' />
              <input
              type='text'
              name='hole_id'
              className="queryComment"
              placeholder="输入评论ID"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hole_id}
              />
            </div>
            <Typography className='attentionText'>
              *评论ID输入“0”时表示查询洞主
            </Typography>
            <Button
              disableRipple
              className='queryBtn'
              type='submit'
              onClick={handleSubmit}
            >
              查询
            </Button>
          </div>
        </form>
        )}
      </Formik>
    </Page>
);
export default UserPage;
