{%extends file="wiki-common/page/layout/base.tpl"%}

{%block name="head_title"%}{%$lemmaInfo.lemmaTitle|escape:html%}_CREATEREACTAPP{%/block%}
{%block name="after_head" append%}
    <% for (let css in htmlWebpackPlugin.files.css) { %>
        {%require name="<%= htmlWebpackPlugin.files.css[css] %>"%}
    <% } %>
{%/block%}
{%block name='body_page_class'%}editor-page{%/block%}
{%block name="body_main"%}
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
    <script type="text/javascript" src="//baikebcs.bdimg.com/cms/wiki-common/lib/BceBosUploader.js"></script>
    <script>
            window._tplData = {
                errno:{%$errno|json_encode|escape:none%},
                errmsg:{%$errmsg|json_encode|escape:none%},
            };
    </script>
{%/block%}
{%block name="after_body" append%}
<% for (let js in htmlWebpackPlugin.files.js) { %>
    {%require name="<%= htmlWebpackPlugin.files.js[js] %>"%}
<% } %>
{%/block%}
