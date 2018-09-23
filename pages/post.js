import withLayout from "../lib/withLayout";

const Post = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris
      eget mi sagittis porta. Nulla ornare, sem a euismod bibendum, lectus neque
      egestas leo, id condimentum ante nibh vitae odio. Suspendisse eleifend
      varius dignissim. Aliquam sodales et ipsum a pellentesque. Sed fermentum
      dui a justo gravida, at iaculis orci facilisis. Vestibulum vestibulum
      efficitur metus, elementum tempus nulla consectetur at. Aenean at lorem
      euismod enim pellentesque fermentum. Pellentesque sollicitudin nunc id
      enim interdum efficitur eu ac nunc. Phasellus id sapien non massa
      vestibulum varius nec et mauris. Sed ullamcorper volutpat ipsum, a lacinia
      purus accumsan non. Pellentesque non velit et erat venenatis malesuada.
      Duis at orci libero. Praesent pharetra turpis a ornare cursus. Etiam
      rutrum tellus id sem euismod, id suscipit leo volutpat. Proin nec lacus a
      magna iaculis euismod eu sed risus.{" "}
    </p>
  </div>
);

export default withLayout(Post);
