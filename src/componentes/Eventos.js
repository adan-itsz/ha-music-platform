import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {Switch, Route,BrowserRouter} from 'react-router-dom'


import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Dropdown,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Eventos'
      inverted
      style={{
        fontFamily:'Francois One',
        fontSize: mobile ? '2em' : '5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '0.5em',
      }}
    />

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 250, maxWidth:1920, padding: '1em 0em',
            backgroundImage: `url(${'https://images.pexels.com/photos/167469/pexels-photo-167469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`,
             backgroundAttachment: 'fixed',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover ' }}
            vertical
          >

            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'>

                <Menu.Item> <Link to={`/`}>Inicio</Link> </Menu.Item>
                <Menu.Item> <Link to={`/biografia`}>Biografía</Link> </Menu.Item>
                  <Dropdown text='Media' pointing className='link item' style={{ opacity: 1}}>
                      <Dropdown.Menu style={{ opacity: 0.9, background : '#1E1E1E'}}>
                      <Dropdown.Item><Link to={`/media/albums`}>Albums</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={`/media/videos`}>Videos</Link></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item><Link to={`/media/libros`}>Libros</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={`/media/articulos`}>Articulos</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={`/media/transcripciones`}>Transcripciones</Link></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  <Menu.Item><Link to={`/cursos`}>Cursos</Link></Menu.Item>
                  <Menu.Item><Link to={`/eventos`}>Eventos</Link></Menu.Item>
           </Menu>



            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a'><Link to={`/`}>Inicio</Link></Menu.Item>
            <Menu.Item as='a'><Link to={`/biografia`}>Biografía</Link></Menu.Item>
            <Dropdown item text='Media'  style = {{ textAlign:'center', background : '#1E1E1E'}} >
                <Dropdown.Menu    style = {{position: 'static', background : '#1E1E1E', color : '@white'}}>
                    <Link to={`/media/albums`}><Dropdown.Item  text='Albums' /></Link>
                    <Link to={`/media/videos`}><Dropdown.Item  text='Videos' /></Link>
                    <Link to={`/media/libros`}><Dropdown.Item  text='Libros' /></Link>
                    <Link to={`/media/articulos`}><Dropdown.Item  text='Articulos' /></Link>
                    <Link to={`/media/transcripciones`}><Dropdown.Item  text='Transcripciones'/></Link>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a'><Link to={`/cursos`}>Cursos</Link></Menu.Item>
            <Menu.Item as='a'><Link to={`/eventos`}>Eventos</Link></Menu.Item>

          </Sidebar>

        <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 550, padding: '1em 0em',backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/pronosticos-a7e4e.appspot.com/o/background-mobile.png?alt=media&token=b3089c50-02aa-427e-b50a-24090897f2a8'})` }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />



            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Footer = () =>(
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
        <Grid.Column width={7}>
          <Header as='h4' inverted>
            Redes sociales
          </Header>
          <p>
            <a href={`https://www.facebook.com`} target={'_blank'} style={{color:'white' }}> <Icon name='facebook' size='big' /> </a>
            <a href={`https://www.instagram.com`}target={'_blank'} style={{color:'white' }}><Icon name='instagram' size='big' /></a>
            <a href={`https://www.youtube.com`}target={'_blank'} style={{color:'white' }}>  <Icon name='youtube' size='big' /></a>
          </p>
        </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Links rapidos' />
            <List link inverted>
              <List.Item as='a'>Inicio</List.Item>
              <List.Item as='a'>Biografia</List.Item>
              <List.Item as='a'>Cursos</List.Item>
              <List.Item as='a'>Eventos</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Media' />
            <List link inverted>
              <List.Item as='a'>Albums</List.Item>
              <List.Item as='a'>Videos</List.Item>
              <List.Item as='a'>Libros</List.Item>
              <List.Item as='a'>Articulos</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

const HomepageLayout = () => (
  <ResponsiveContainer>
  <Segment style={{ padding: '8em 0em'}} vertical>
  <Grid container stackable verticalAlign='middle' style={{paddingBottom:'5vh'}}>
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Facilisi orci rhoncus litora felis in pulvinar
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Laoreet morbi cursus nullam tristique non condimentum per nam ut cubilia, mi feugiat conubia lacinia blandit est varius vel ligula leo,
         senectus mollis himenaeos odio at elementum eu suscipit mauris. Elementum lacus primis laoreet lectus sed, diam quam accumsan id curae,
         potenti vestibulum necerat.
        </p>
      </Grid.Column>
      <Grid.Column floated='left' width={6}>
        <img style={{maxWidth:'35vh',float:'center'}}src='https://medias.audiofanzine.com/images/normal/berklee-online-piano-handbook-810783.png'/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    <Container text>
      <Button as='a' size='large'>
        Read More
      </Button>
      <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <a href='#'>Duis nam ut </a>
      </Divider>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Etiam semper pharetra morbi tortor
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Tristique id euismod nisi conubia pellentesque sagittis dis inceptos, risus sed purus dictum lectus blandit ut,
        commodo taciti habitasse in ridiculus faucibus lacus. Duis montes nec ad quisque tellus ligula condimentum sem,
         consequat torquent dictumst ante etiam justo magnis, nullam vehicula.
      </p>
      <Button as='a' size='large'>
        Sodales lacinia aptent
      </Button>
    </Container>
  </Segment>
    <Footer/>
  </ResponsiveContainer>
)


export default HomepageLayout
