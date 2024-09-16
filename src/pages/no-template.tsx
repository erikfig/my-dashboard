import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@components'

export const NoTemplate = () => {
  const navigate = useNavigate()
  const handleBack = () => navigate('/')

  return (
    <div className="p-8">
      <Typography type="h1">
        Lorem ipsum dolor sit amet
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut viverra massa, sit amet pulvinar sapien. Aenean porttitor et orci id tincidunt. Nullam erat ligula, suscipit vel condimentum consectetur, vehicula id lectus. Maecenas aliquet et sapien eget vehicula. Praesent vitae placerat felis, at facilisis orci. In sit amet vestibulum nisl. Quisque sodales facilisis sem eu venenatis.
      </Typography>

      <Typography>
        Morbi vestibulum volutpat purus vitae molestie. Aliquam non risus in metus porttitor feugiat non vitae tortor. Morbi vulputate aliquam turpis, laoreet iaculis felis porta varius. Donec et tellus dolor. Morbi facilisis dolor at felis scelerisque dapibus. Vestibulum tristique vestibulum orci. Aliquam ante purus, porttitor et risus porttitor, mattis vehicula nisl. Pellentesque lobortis fermentum pellentesque. Aliquam erat volutpat. Nulla facilisi. Pellentesque vestibulum dui ac vulputate bibendum.
      </Typography>

      <Typography>
        In faucibus lorem vitae lacus vestibulum, et viverra massa blandit. Pellentesque pharetra vulputate congue. Donec a blandit mauris. Maecenas vulputate euismod diam, quis dignissim nunc elementum eu. Praesent porta aliquet est, quis volutpat justo sodales id. In hac habitasse platea dictumst. Mauris pulvinar tellus semper porta rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </Typography>

      <Typography>
        Quisque congue dictum massa, ullamcorper fermentum nulla vulputate eget. Vivamus ultricies pulvinar nulla vitae pulvinar. Maecenas mattis tincidunt elit, quis dignissim justo euismod vel. Quisque volutpat neque nec sem gravida aliquet. Curabitur aliquet bibendum purus at bibendum. Maecenas at dapibus elit. In vel elit in lacus auctor rutrum nec ac justo. Pellentesque diam odio, convallis quis iaculis eu, sodales non nibh. Phasellus id convallis urna.
      </Typography>

      <Typography>
        Nam mattis pulvinar arcu. Nulla ex nibh, varius nec lobortis a, dictum ac massa. Vestibulum diam lacus, ultricies et massa sed, sodales molestie urna. Duis turpis turpis, mattis et dictum vitae, eleifend quis sapien. Donec maximus tristique mi vitae commodo. Nulla laoreet consequat purus. In aliquet gravida velit, id fermentum tellus dignissim eget. Maecenas a velit eget lorem dapibus pretium. Nullam eu sapien pharetra, luctus augue eu, auctor purus. Integer non purus sapien. Sed malesuada orci velit, vel pulvinar tellus rhoncus vel. Nam non tincidunt sem, in luctus elit. Donec suscipit ex ultricies nulla scelerisque, nec eleifend augue vestibulum. Duis imperdiet convallis sollicitudin.
      </Typography>

      <Button onClick={handleBack}>Voltar</Button>
    </div>
  )
}
