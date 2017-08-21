$(function() {
    /*读取热门游记-用户日记*/
    $.get('assets/js/traveldata.json', function(data) {
        var userstr = '';
        var i = 0; //第一页
        var maxnum = i + 10; //每页10条数据
        for (i; i < maxnum; i++) {
            userstr += `
                <li class="tn-item">
                    <div class="tn-image">
                        <a href="" title=""><img src="assets/images/uploads/travelnotes/${data[i].imgurl}" alt=""></a>
                    </div>

                    <div class="tn-wrapper">
                        <dl>
                            <dt>
                                <a href="" title="${data[i].title}">${data[i].title}</a>
                                <a class="tn-from-app" href="javascript:void(0);" style="display:${data[i].app?'inline':'none'}">
                                    <i></i>APP
                                    <img src="assets/images/icon/mfwapp-notes.png">
                                </a>
                            </dt>
                            <dd><a href="" title="${data[i].content}">${data[i].content}</a></dd>
                        </dl>
                        <div class="tn-extra">
                            <span class="tn-place">
                                <i></i>
                                <a href="" title=""><span>${data[i].place}</span></a>，by
                            </span>
                            <span class="tn-user">
                                <a href="" title=""><img src="./assets/images/uploads/icon-user/${data[i].usericon}" alt="">${data[i].username}</a>
                            </span>
                            <span class="tn-nums"><i></i>${data[i].nums}</span>
                            <span class="tn-ding">
                                ${data[i].ding}<a href="" title=""></a>
                            </span>
                        </div>
                    </div>
                </li>
            `;
        }
        $('.tn-list').append(userstr);
    });
    $.get('assets/js/listseason.json', function(data) {
        var listseason = '';
        for (var i = 0; i < data.length; i++) {
            listseason += `
                <div class="tiles" data-month="${data[i].id}">
                    <div class="item col3">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[0].imgurl}">
                            <div class="title" data-city="${data[i].content.city}">${data[i].content[0].city}</div>
                        </a>
                    </div>
                    <div class="item col3">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[1].imgurl}">
                            <div class="title">${data[i].content[1].city}</div>
                        </a>
                    </div>
                    <div class="item col3">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[2].imgurl}">
                            <div class="title">${data[i].content[2].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[3].imgurl}">
                            <div class="title">${data[i].content[3].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[4].imgurl}">
                            <div class="title">${data[i].content[4].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[5].imgurl}">
                            <div class="title">${data[i].content[5].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[6].imgurl}">
                            <div class="more">
                                <span>更多 <i></i></span>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        }
        $('.row-season .seasonmmds').append(listseason);
    });

    $.get('assets/js/list.json', function(data) {
        // console.log(data['theme']['year'][0].img);
        var list = '';
        list += `<div class="tiles" data-theme="year">`;
        for (var i = 0; i < data['theme']['year'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['year'][i].img}">
                        <div class="title">${data['theme']['year'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;

        list += `<div class="tiles" data-theme="season">`;
        for (var i = 0; i < data['theme']['season'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['season'][i].img}">
                        <div class="title">${data['theme']['season'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;

        list += `<div class="tiles" data-theme="chuxing">`;
        for (var i = 0; i < data['theme']['chuxing'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['chuxing'][i].img}">
                        <div class="title">${data['theme']['chuxing'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;
        list += `<div class="tiles" data-theme="hoilday">`;
        for (var i = 0; i < data['theme']['hoilday'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['hoilday'][i].img}">
                        <div class="title" data-title="${data['theme']['hoilday'][i].title}">${data['theme']['hoilday'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;
        $('.row-theme .catemdds').append(list);



    });

    $('.page_loader').click(function() {
        $(this).html('加载中. . .');
        $(this).mouseout(function(event) {
            $(this).css('background-color', '#efefef')
        });;
        var gong = '';

        $('.gl-post>div').append(gong);
    });
});