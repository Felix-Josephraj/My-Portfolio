const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: 'none',
      fontSize: '22px',
      padding: '10px',
      transition: '0.2s ease-in',
    },
  }

  return (
    <div className='socialIcons' style={styles.socialIcons}>
      <a
        className='icon'
        style={styles.icon}
        href='https://github.com/Felix-Josephraj'
      >
        <i
          className='fa-brands fa-github'
          aria-hidden='true'
          title="Felix J' GitHub Profile"
        ></i>
      </a>
      <a
        className='icon'
        style={styles.icon}
        href='https://www.linkedin.com/in/felix-j-a94886237/'
      >
        <i
          className='fa-brands fa-linkedin'
          aria-hidden='true'
          title="Felix J' LinkedIn Profile"
        ></i>
      </a>
      <a
        className='icon'
        style={styles.icon}
        href='https://www.instagram.com/felix_anderson_/'
      >
        <i
          className='fa-brands fa-instagram'
          aria-hidden='true'
          title='Felix J instagram Profile'
        ></i>
      </a>
      <a
        className='icon'
        style={styles.icon}
        href='https://twitter.com/christiano_feli'
      >
        <i
          className='fa-brands fa-twitter'
          aria-hidden='true'
          title="Felix J' Twitter Profile"
        ></i>
      </a>
    </div>
  )
}

export default SocialIcons
