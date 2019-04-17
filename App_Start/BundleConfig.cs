using System.Web.Optimization;

namespace AdminPortal
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = true;

            bundles.Add(
               new Bundle("~/bundles/styles").Include("~/build/main.css")
            );

            bundles.Add(
               new Bundle("~/bundles/scripts").Include("~/build/main.js")
            );
        }
    }
}