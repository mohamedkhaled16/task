<h1>Posts List </h1>
<table>
    <thead>
    <tr>
        <td>Title</td>
        <td>Content</td>
    </tr>
    </thead>
    <tbody>
        @foreach ($postList as $post)
        <tr>
            <td>{{$post->title}}</td>
            <td>{{$post->content}}</td>
        </tr>
        @endforeach
    </tbody>
    
</table>